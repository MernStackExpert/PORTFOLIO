import React, { useRef, useEffect } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    // তারার কনফিগারেশন
    const stars = [];
    const numStars = 200; // তারার সংখ্যা
    const speed = 0.5; // তারার গতি

    // তারা তৈরি করার ফাংশন
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed
      });
    }

    // অ্যানিমেশন লুপ
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট (Deep Space Look)
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0f172a'); // Slate 900
      gradient.addColorStop(1, '#020617'); // Slate 950
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // তারার মুভমেন্ট
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // পজিশন আপডেট
        star.x += star.vx;
        star.y += star.vy;

        // বাউন্ডারি চেক (স্ক্রিন থেকে বের হলে উল্টো দিক দিয়ে আসবে)
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      });

      // কানেক্টিং লাইনস (Constellation Effect)
      // এটা 4D ফিল দিবে
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.15)'; // Cyan color low opacity
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // যদি তারা কাছাকাছি থাকে তবে লাইন টানবে
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // রিসাইজ হ্যান্ডেল করা
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default Background;