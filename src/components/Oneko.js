import { useEffect } from 'react';

export const Oneko = () => {
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    // Get the footer element to constrain the cat's movement
    const getFooterBounds = () => {
      const footer = document.querySelector('footer.footer');
      if (!footer) return null;
      const rect = footer.getBoundingClientRect();
      return {
        left:   rect.left   + window.scrollX + 32,
        right:  rect.right  + window.scrollX - 32,
        top:    rect.top    + window.scrollY + 32,
        bottom: rect.bottom + window.scrollY - 32,
      };
    };

    const bounds = getFooterBounds();
    if (!bounds) return;

    const nekoEl = document.createElement('div');

    // Start somewhere in the footer
    let nekoPosX = (bounds.left + bounds.right) / 2;
    let nekoPosY = (bounds.top + bounds.bottom) / 2;
    let targetX  = nekoPosX;
    let targetY  = nekoPosY;

    let state = 'sleeping';
    let frameCount = 0;
    let idleTime   = 0;

    const WALK_SPEED = 4;

    const spriteSets = {
      idle:        [[-3, -3]],
      alert:       [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      sleeping:    [[-2, 0], [-2, -1]],
      N:  [[-1, -2], [-1, -3]], NE: [[0, -2],  [0, -3]],
      E:  [[-3, 0],  [-3, -1]], SE: [[-5, -1], [-5, -2]],
      S:  [[-6, -3], [-7, -2]], SW: [[-5, -3], [-6, -1]],
      W:  [[-4, -2], [-4, -3]], NW: [[-1, 0],  [-1, -1]],
    };

    nekoEl.style.width           = '32px';
    nekoEl.style.height          = '32px';
    nekoEl.style.position        = 'absolute';   // absolute so it scrolls with page
    nekoEl.style.zIndex          = '9999';
    nekoEl.style.backgroundImage = "url('https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif')";
    nekoEl.style.imageRendering  = 'pixelated';
    nekoEl.style.pointerEvents   = 'auto';
    nekoEl.style.left            = `${nekoPosX - 16}px`;
    nekoEl.style.top             = `${nekoPosY - 16}px`;
    document.body.appendChild(nekoEl);

    const setSprite = (name, frame) => {
      const set = spriteSets[name];
      const sprite = set[frame % set.length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    // Wake up on hover
    nekoEl.onmouseenter = () => {
      if (state === 'sleeping') {
        state   = 'alert';
        idleTime = 0;
        // Pick a new random spot within the footer
        const b  = getFooterBounds();
        if (b) {
          targetX = Math.random() * (b.right  - b.left) + b.left;
          targetY = Math.random() * (b.bottom - b.top)  + b.top;
        }
      }
    };

    function frame() {
      frameCount++;
      const diffX    = nekoPosX - targetX;
      const diffY    = nekoPosY - targetY;
      const distance = Math.hypot(diffX, diffY);

      if (state === 'sleeping') {
        setSprite('sleeping', Math.floor(frameCount / 4));
        return;
      }

      if (state === 'alert') {
        setSprite('alert', 0);
        idleTime++;
        if (idleTime > 15) { state = 'walking'; idleTime = 0; }
        return;
      }

      if (state === 'walking' && distance > WALK_SPEED) {
        let direction = '';
        if (diffY / distance >  0.5) direction += 'N';
        else if (diffY / distance < -0.5) direction += 'S';
        if (diffX / distance >  0.5) direction += 'W';
        else if (diffX / distance < -0.5) direction += 'E';

        setSprite(direction || 'S', frameCount);
        nekoPosX -= (diffX / distance) * WALK_SPEED;
        nekoPosY -= (diffY / distance) * WALK_SPEED;

        // Clamp to footer bounds
        const b = getFooterBounds();
        if (b) {
          nekoPosX = Math.max(b.left,  Math.min(b.right,  nekoPosX));
          nekoPosY = Math.max(b.top,   Math.min(b.bottom, nekoPosY));
        }

        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top  = `${nekoPosY - 16}px`;
      } else if (state === 'walking') {
        state = 'idle';
      }

      if (state === 'idle') {
        idleTime++;
        if (idleTime < 30) setSprite('scratchSelf', frameCount);
        else               setSprite('idle', 0);
        if (idleTime > 100) { state = 'sleeping'; idleTime = 0; }
      }
    }

    const interval = setInterval(frame, 100);

    return () => {
      clearInterval(interval);
      if (document.body.contains(nekoEl)) nekoEl.remove();
    };
  }, []);

  return null;
};