import Tab from 'react-bootstrap/Tab'
import Slider from './slider'

export default function Panel({laLlave, laImagen = "", elTitulo, laIntro}) {
  return (
    <Tab.Pane eventKey={laLlave} style={{background: `url(${laImagen})`}}>
      <div className="contenidoTab mb-5">
        <h1><span className="lnr lnr-arrow-right"></span> {elTitulo}</h1>
        <p className="text-light" style={{ fontWeight: '100'}}><span className="lnr lnr-chevron-right"></span> {laIntro}</p>
        <hr />
        <div className="flow">
        <Slider />
        {/*
          <div align="center">
            <img src="/images/digital/web-flow.jpg" className="img-fluid" alt="" title="" />
          </div>
          <hr />
          
          <p>The web development process can actually vary in terms of manpower. For example for big businesses, there are hundreds of people working together as a team. On the other hand, it is very much possible that a single person can make the whole website on his own too. Certainly, the outcome of both of these categories will be completely different. In the case of the first approach, <b>Agile Methodologies</b> are very helpful. The content management system is also in use during the process to make content changes easily.</p>
          <h3>the web development chain of command includes:</h3>
          <ul>
            <li>a) Server-side scripting</li>
            <li>b) Client-side scripting</li>
            <li>c) Database technology</li>
          </ul>
          */}
        </div>
      </div>
    </Tab.Pane>
  )
}
