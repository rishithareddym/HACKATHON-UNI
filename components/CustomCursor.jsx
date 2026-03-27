import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const ring = document.getElementById('curRing');
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let requestRef;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animateCursor = () => {
      cur.style.left = mx - 5 + 'px';
      cur.style.top = my - 5 + 'px';
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx - 0 + 'px'; // Adjusted from vanilla because of translate(-50%, -50%)
      ring.style.top = ry - 0 + 'px';
      requestRef = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(animateCursor);

    const handleHoverIn = () => ring.classList.add('big');
    const handleHoverOut = () => ring.classList.remove('big');

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .prog-card, .alumni-card, .event-item, .tour-spot, .map-cat, .faculty-card, .research-card, .news-card').forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    };

    addHoverListeners();

    // Re-attach listeners on mutations
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cur" id="cur"></div>
      <div className="cur-ring" id="curRing"></div>
    </>
  );
};

export default CustomCursor;
