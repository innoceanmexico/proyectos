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
        </div>
      </div>
    </Tab.Pane>
  )
}
