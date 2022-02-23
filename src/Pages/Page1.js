import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Table, Input, Select } from 'antd';

const Search = Input.Search;
const { Option } = Select;

function Page1() {

    const data = useSelector((state) => state.list);
    const [dataa, setDataa] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        setDataa(data)
    }, [data && data])
    const columns = [
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
            // sorter: (a, b) => a.country.localeCompare(b.country),
            sorter: (a, b) => sort === "country" && a.country.localeCompare(b.country),
            render: text => <a>{text}</a>,
        },
        {
            title: 'Total Cases',
            dataIndex: 'cases',
            key: 'cases',
            sorter: (a, b) => a.cases - b.cases,
            sortOrder: sort === 'total' && "ascend",
        },
        {
            title: 'Active Cases',
            dataIndex: 'active',
            key: 'active',
            sorter: (a, b) => a.active - b.active,
            sortOrder: sort === 'active' && "ascend",
        },
        {
            title: 'Recovered',
            key: 'recovered',
            dataIndex: 'recovered',
            sorter: (a, b) => a.recovered - b.recovered,
            sortOrder: sort === 'recovered' && "ascend",
        },
        {
            title: 'Deaths',
            key: 'deaths',
            dataIndex: 'deaths',
            sorter: (a, b) => a.deaths - b.deaths,
            sortOrder: sort === 'deaths' && "ascend",
        },
        {
            title: 'Critical',
            key: 'critical',
            dataIndex: 'critical',
        },

    ];

    const handleSearch = searchText => {
        const filteredEvents = data.filter(({ country }) => {
            country = country.toLowerCase();
            return country.includes(searchText);
        });
        setDataa(filteredEvents)
    };

    // const sortData = (data) => {
    //     setDataa(data.slice().sort((a, b) => a.key - b.key));
    //  }

    return (
        <div >
            <h2 style={{ textAlign: 'center' }}>Table View</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={{ marginRight: '10px' }}>Sort by: </p>
                    <Select defaultValue="" style={{ width: 120 }} onChange={(e) => setSort(e)}>
                        <Option value="">Select sort</Option>
                        <Option value="country">Country</Option>
                        <Option value="total">Total Cases</Option>
                        <Option value="active">Active Cases</Option>
                        <Option value="deaths">Deaths</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={{ marginRight: '10px' }}>Search: </p>
                    <Search placeholder="Search Country" onSearch={handleSearch} style={{ width: 200 }} />
                </div>
            </div>
            <Table dataSource={dataa} columns={columns} size="small" />
        </div>
    );
}

export default Page1;