import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Sidebar from './Components/Sidebar';
import Routes from './Components/Routes';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";

const store = configureStore();
const { Header, Content, Footer, Sider } = Layout;

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Layout className='layout'>
                    <Sider className="sider">
                        <h3 className='logo'>COVID-19 DEMO</h3>
                        <Sidebar />
                    </Sider>
                    <Layout style={{marginLeft:200, height:"100%"}}>
                        <Header className="header">Covid-19 world tracker</Header>
                        <Content style={{ margin: '24px 16px 0'}}>
                            <Routes />
                        </Content>
                        <Footer className='footer'>
                            This is a footer which is gonna contain some useful information about this app.
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
