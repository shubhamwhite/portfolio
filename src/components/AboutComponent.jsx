import React from 'react';
import githubIcon from '../assets/social/git_4494683.png'; // Adjust path as necessary
import mediumIcon from '../assets/social/medium_5968933.png'; // Adjust path as necessary
import twitterIcon from '../assets/social/twitter_5969020.png'; // Adjust path as necessary

const AboutComponent = () => {
  return (
    <div className="flex flex-col items-center">
        {/* Footer */}
      <footer className="w-full bg-orange-200 text-black p-4">
        <div className="flex justify-center items-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
        <p className="text-center mt-2">
          © 2019 - 2022 | Designed & coded 💙 by Shubham Panchal
        </p>
      </footer>
    </div>
  );
};

export default AboutComponent;
