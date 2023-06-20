import facebook from '../assets/facebook.png'
import linked_in from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a 
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50 transition duration-300"
        >
            <img src={linked_in} alt="linkedin-link" />
        </a>
        <a 
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50 transition duration-300"
        >
            <img src={twitter} alt="twitter-link" />
        </a>
        <a 
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50 transition duration-300"
        >
            <img src={facebook} alt="facebook-link" />
        </a>
        <a 
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50 transition duration-300"
        >
            <img src={instagram} alt="instagram-link" />
        </a>
    </div>
  )
}

export default SocialMediaIcons