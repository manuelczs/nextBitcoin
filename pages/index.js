import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
      <div className="has-text-info box">
        <h1 className="has-text-weight-semibold has-text-info box">Welcome to BitzPrice</h1>
        <div className="box">
          <div className="">
            <p className="has-text-weight-bold">CHECK CURRENT BITCOIN RATE</p>
          </div>
          <Prices bpi={props.bpi} />
        </div>
      </div>
    </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  }
}

export default Index;