import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewProfile from '../viewprofile/viewprofile';


export default function About() {
    let userr = {"id":1,"firstName":"Terry","lastName":"Medhurst","maidenName":"Smitham","age":50,"gender":"male","email":"atuny0@sohu.com",
  "phone":"+63 791 675 8914","username":"atuny0","password":"9uQFF1Lh","birthDate":"2000-12-25",
  "image":"https://robohash.org/hicveldicta.png","bloodGroup":"A−","height":189,"weight":75.4,"eyeColor":"Green","hair":{"color":"Black","type":"Strands"}
  ,"domain":"slashdot.org","ip":"117.29.86.254","address":{"address":"1745 T Street Southeast","city":"Washington",
  "coordinates":{"lat":38.867033,"lng":-76.979235},"postalCode":"20020","state":"DC"},"macAddress":"13:69:BA:56:A3:74",
  "university":"Capitol University","bank":{"cardExpire":"06/22","cardNumber":"50380955204220685","cardType":"maestro",
  "currency":"Peso","iban":"NO17 0695 2754 967"},"company":{"address":{"address":"629 Debbie Drive","city":"Nashville",
  "coordinates":{"lat":36.208114,"lng":-86.58621199999999},"postalCode":"37076","state":"TN"},
  "department":"Marketing","name":"Blanda-O'Keefe","title":"Help Desk Operator"},"ein":"20-9487066","ssn":"661-64-2976",
  "userAgent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"}
  
    return (
        <>
        <div>
            <p className='text-left p-3'>
                <span className='h5'>Email: &emsp; </span>
                <span id='info' className='bg-white border shadow-sm rounded'>{userr.email}</span>
            </p>

            <p className='text-left p-3'>
                <span className='h5'>Username: &emsp; </span>
                <span id='info' className='bg-white rounded border shadow-sm'>{userr.username}</span>
            </p>

            <p className='text-left p-3'>
                <span className='h5'>Phone Number: &emsp; </span>
                <span id='info' className='bg-white rounded border shadow-sm'>{userr.phone}</span>
            </p>

            <p className='text-left p-3'>
                <span className='h5'>Birthdate: &emsp; </span>
                <span id='info' className='bg-white rounded border shadow-sm'>{userr.birthDate}</span>
            </p>

            <p className='text-left p-3'>
                <span className='h5'>Address: &emsp; </span>
                <span id='info' className='bg-white rounded border shadow-sm'>{userr.address.address}, {userr.address.city}</span>
            </p>

            <p className='text-left p-3'>
                <span className='h5'>Education: &emsp; </span>
                <span id='info' className='bg-white rounded border shadow-sm'>{userr.company.department} at {userr.university}</span>
            </p>

            <p className='text-left p-3'>
                <span className='h5'>Work: &emsp; </span>
                <span id='info' className='bg-white rounded border shadow-sm'>{userr.company.title} at {userr.company.name}</span>
            </p>
        </div>
        </>
    );
}
