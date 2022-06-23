import React, { Component } from 'react';
import Collapse_items from './Collapse_items';

class Collapse extends Component {
    render() {
        return (
            <div className="w-50">
                <div className='text-center pt-5'>
                    <div className="row">

                        <div className='row'>
                        <div className="col ">
                            <button className="btn btn-danger mx-1 px-4 mb-3" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3 multiCollapseExample4 multiCollapseExample5 multiCollapseExample6">All</button>
                        </div>
                            <div className='col'>
                                <button className="btn btn-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">career01</button>
                            </div>
                            <div className='col'>
                                <button className="btn btn-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">career02</button>
                            </div>    
                            <div className='col'>
                                <button className="btn btn-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">career03</button>
                            </div>
                        </div>
                        <div className='row pt-2 pb-5'>
                            <div className='col'>
                                <button className="btn btn-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">career04</button>
                            </div>
                            <div className='col'>
                                <button className="btn btn-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample5" aria-expanded="false" aria-controls="multiCollapseExample5">career05</button>
                            </div>    
                            <div className='col'>
                                <button className="btn btn-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6" aria-expanded="false" aria-controls="multiCollapseExample6">career06</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center">버튼을 클릭하시면 카드가 나옵니다.</p>
                <Collapse_items/>
            </div>
        );
    }
}

export default Collapse;