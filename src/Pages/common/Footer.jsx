import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2c3e50] text-[#ecf0f1] py-10 px-5 font-sans">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
                {/* Column 1: About */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4 text-[#f1c40f]">TaskMaster Pro</h3>
                    <p className="text-sm leading-6 text-[#bdc3c7]">
                        TaskMaster Pro helps you stay organized, prioritize tasks, and achieve your goals faster. Your ultimate productivity partner.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4 text-[#f1c40f]">Quick Links</h3>
                    <ul className="list-none p-0">
                        <li><a href="#" className="no-underline text-[#bdc3c7] text-sm hover:text-[#f1c40f] transition-colors">Home</a></li>
                        <li><a href="#" className="no-underline text-[#bdc3c7] text-sm hover:text-[#f1c40f] transition-colors">Tasks</a></li>
                        <li><a href="#" className="no-underline text-[#bdc3c7] text-sm hover:text-[#f1c40f] transition-colors">Calendar</a></li>
                        <li><a href="#" className="no-underline text-[#bdc3c7] text-sm hover:text-[#f1c40f] transition-colors">Settings</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4 text-[#f1c40f]">Contact Us</h3>
                    <p className="text-sm text-[#bdc3c7] leading-6">
                        📧 Email: support@taskmaster.com<br />
                        📞 Phone: +123-456-7890<br />
                        🏢 Address: 123 Productivity St, Worktown, USA
                    </p>
                </div>

                {/* Column 4: Social Media */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4 text-[#f1c40f]">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="no-underline text-[#bdc3c7] text-sm hover:text-[#f1c40f] transition-colors">Twitter</a>
                        <a href="#" className="no-underline text-[#bdc3c7] text-sm hover:text-[#f1c40f] transition-colors">LinkedIn</a>
                        <a href="#" className="no-underline text-[#bdc3c7] text-sm hover:text-[#f1c40f] transition-colors">Facebook</a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-6 border-t border-[#34495e]">
                <p className="text-xs text-[#bdc3c7]">
                    © 2025 TaskMaster Pro. All Rights Reserved. | Designed with ❤️ by Your Team
                </p>
            </div>
        </footer>
    );
};

export default Footer;