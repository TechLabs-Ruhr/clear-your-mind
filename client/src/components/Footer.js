import '../components/Footer.css'
import {Facebook} from 'iconsax-react';
import {Instagram} from 'iconsax-react';
import {Copyright} from 'iconsax-react';

function Footer(props) {

    const {isLine} = props;

    return ( <>
    <div id="FooterContainer" style={{borderTop: isLine ? '2px solid white' : 'none'}}>
            <div id="logo">Clear Your Mind</div>
            <div className="itemLogo">
                <div id='copyrightWrapper'> 
                <Copyright size="22" color="white"/>
                </div>
                <span id='secondLogo'> 
                Clear Your Mind 2023 
                </span>
                </div>  
            <div className="item">Legal Notice </div>
            <div className="item">Terms of Service</div>
            <div className="item">Privacy Policies </div>
            <div className='itemsSocialMedia'>
                <Facebook size="32" color="white"/>
                <div style={{width: "10px",}}></div>
                <Instagram size="32" color="white"/>
            </div>
        </div>
    
    </>);
}

export default Footer;