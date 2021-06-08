import React from 'react';

import './styles/BadgeNew.css';
import header from '../components/images/badge-header.svg';
import Navbar from  '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.PureComponent{
    render (){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Isaac"
                                   lastName="Hernandez" 
                                   jobTitle="Frontend Developer" 
                                   twitter="SasoHdz" 
                                   avatarUrl="https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/186369854_918866242020897_2260182689203836141_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHkL_3213g0xd3cHo3GbzFnrgJevSH_FgauAl69If8WBlcvBsSeouTzRFBwjnSVm0daqPyCybmVGBLPGSTX-rsK&_nc_ohc=yv4dIO3cflMAX8XO6Ie&tn=B_zKFSPla6C3ZdpL&_nc_ht=scontent.fqro1-1.fna&oh=6fc603851a06bfd86652e02969b413d6&oe=60E5F632"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;