import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 pt-12 mt-9 ">
      <div className="grid md:grid-cols-5 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white font-semibold mb-2">
            BPL Dream 11
          </h3>
          <p className="text-sm">
            BPL Dream 11 is a fantasy cricket platform where you can create your
            own dream team by selecting eleven players. Compete with friends,
            track match updates, and enjoy the thrill of the Bangladesh Premier
            League in a whole new way!
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Support</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Features</h4>
          <ul className="space-y-1 text-sm">
            <li>Select Your 11 Players</li>
            <li>Live Match Updates</li>
            <li>Leaderboard & Rewards</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Fair Play Rules</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              Facebook — BPL Dream 11
            </li>
            <li className="flex items-center gap-2">
              Twitter — @BPLDream11
            </li>
            <li className="flex items-center gap-2">
              Instagram — @BPLDream11
            </li>
            <li className="flex items-center gap-2">
              support@bpldream11.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-7">
        <hr />
        <div className="text-left md:text-center text-gray-500 text-sm mt-6 pb-6">
          © 2025 BPL Dream 11. 
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
