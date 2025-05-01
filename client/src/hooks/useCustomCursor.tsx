import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    // Create cursor elements
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');

    // Apply styles to the cursor dot
    cursor.classList.add('cursor');
    cursor.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: hsl(var(--primary));
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.75;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, opacity 0.2s;
    `;

    // Apply styles to the cursor follower
    cursorFollower.classList.add('cursor-follower');
    cursorFollower.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      background: rgba(var(--primary), 0.2);
      border: 1px solid rgba(var(--primary), 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      opacity: 0.5;
      transform: translate(-50%, -50%);
      transition: width 0.3s, height 0.3s, opacity 0.3s;
    `;

    // Append cursor elements to body
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    // Set initial position off-screen
    cursor.style.top = '-100px';
    cursor.style.left = '-100px';
    cursorFollower.style.top = '-100px';
    cursorFollower.style.left = '-100px';

    // Mouse movement handler
    const onMouseMove = (e: MouseEvent) => {
      // Update cursor position
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
      
      // Update follower position with slight delay for smooth following effect
      setTimeout(() => {
        cursorFollower.style.top = e.clientY + 'px';
        cursorFollower.style.left = e.clientX + 'px';
      }, 80);
    };

    // Interactive elements handler
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        // Expand cursor when hovering interactive elements
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.style.opacity = '1';
        
        cursorFollower.style.width = '60px';
        cursorFollower.style.height = '60px';
        cursorFollower.style.opacity = '0.3';
      }
    };

    // Reset cursor style when not hovering interactive elements
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.opacity = '0.75';
        
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
        cursorFollower.style.opacity = '0.5';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Remove cursors when leaving window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorFollower.style.opacity = '0';
    });

    // Show cursors when entering window
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '0.75';
      cursorFollower.style.opacity = '0.5';
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorFollower);
    };
  }, []);
};

export default useCustomCursor;