import React from 'react';
import {useSelector } from "react-redux";
import {Row} from "antd";
import CountryCard from '../Components/CountryCard';

function Page2(props) {
    const data = useSelector((state) => state.list);
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Countrywise Card View</h2>
            <Row gutter={16}>
                {data && data.map((obj)=>
                    <CountryCard data={obj} />
                )}
            </Row>
        </div>
    );
}

export default Page2;