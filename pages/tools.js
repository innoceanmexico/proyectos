import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Tools() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> FORMATO SEGUIMIENTO DE STATUS DE PROYECTOS <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
            <hr/>
        <h3>HERRAMIENTAS SUGERIDAS PARA DESARROLLO DE PROYECTOS</h3>
        <hr/>
        <h4>Chrome DevTools</h4>
        <p>Chrome developer tools are a set of tools designed to help developers that are easy to access in the Google Chrome browser. Chrome developer tools can make troubleshooting easy by showing you the errors in your code directly. You can also make changes without needing a text editor. A certain element can be seen in the element inspection option and you can modify it and see the changes in real time. It is very easy to use as it is organized and easy to navigate.</p>
        <h4>TypeScript</h4>
        <p>TypeScript is an open-source front-end scripting language. It is a strict syntactical superset of JavaScript that adds optional static typing. It is designed for the development of large applications and compiles to JavaScript. TypeScript creates the best web development environment for front-end developers.</p>
        <h4>GitHub</h4>
        <p>GitHub is a web development platform inspired by the way you work. This tool allows developers to examine code, create software applications and manage projects. Key features: it offers tools suitable for the job, allows all the code in one place, coordinates use, stays aligned and after each GitHub project management tool, the developers can host the direct documentation through the repositories.</p>
        <h4>Sass</h4>
        <p>Sass is the most reliable and robust CSS extension language. This web development tool helps to extend the functionality of an existing CSS such as variables, inheritance, and nesting with ease. Sass is an open source project that attracts updated CSS preprocessors. This tool gives you a hand in writing a code that can be easily maintained, thus reducing the amount of CSS you need to code.</p>
        <h4>NPM</h4>
        <p>Npm represents the Node package manager for JavaScript. Through Npm, you can discover reusable code packages and assemble them in powerful and new ways. This web development tool is a command line utility for interacting with a named repository that helps in package.</p>
        <h4>React JS</h4>
        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Tools;