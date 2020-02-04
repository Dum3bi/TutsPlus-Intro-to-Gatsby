import React from "react"
import {Link} from 'gatsby';
import Layout from './../components/layout';
import {Helmet} from 'react-helmet';


export default ({pageContext}) => {
    const items = pageContext.employees.map((item, index) => (
        <li key={index}>
            <Link to={`/employees/${item.firstName.toLowerCase()}-${item.lastName.toLowerCase()}/`}>
                {item.firstName} {item.lastName}
            </Link>
        </li>
    ));
    
    return (
    <Layout>
        <Helmet>
            <title>Our Employees</title>
        </Helmet>
        <h2>Employees</h2>
        <ul>
            {items}
        </ul>
    </Layout>
)};
