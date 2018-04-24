import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../../redux/actions/index';
import DeviceService from "services/device_service.js";
 
class BookList extends Component {
    constructor(){
        super();

        // TODO: Load data from API, save response in BookList reducer just for a test
        // curl -X GET 'http://gaugescoutapi.azurewebsites.net/api/DeviceLocations'
        // DeviceService.getDeviceLocations();
        let service = new DeviceService;
        let test = service.doTest("monkey");
        console.log("test:"+test);
        service.getDeviceLocations();
    }
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
