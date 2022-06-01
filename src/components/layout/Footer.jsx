import githubIcon from '../../img/github_icon.png';
const Footer = () => {
  return (
    <footer>
      <p className='footer-author'>
        created by{' '}
        <a
          href='https://www.linkedin.com/in/dubarjeremy/'
          target='_blank'
          className='footer-link'
        >
          Dubar Jérémy
        </a>
      </p>
      <a href='https://github.io' target='_blank' className='footer-link'>
        <img src={githubIcon} className='footer-github-icon' />
      </a>
    </footer>
  );
};

export default Footer;
