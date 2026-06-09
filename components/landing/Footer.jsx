import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-background text-foreground border-t border-primary/20">
      <div className="px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <img
              src="https://media.base44.com/images/public/6a21e686e620a4d219e8d758/2235ae8c6_CLapps_logo_v3.png"
              alt="CLApps"
              className="h-8 w-auto object-contain"
            />
            <span className="text-xs font-body text-muted-foreground">
              © 2026 CLApps. All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <a
              href="https://www.clappsdesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              www.clappsdesign.com
            </a>
            <div className="text-xs font-body text-muted-foreground tracking-wide">
              <span className="text-primary/70">{time}</span>
              <span className="mx-2 text-border">·</span>
              <span>GST</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
