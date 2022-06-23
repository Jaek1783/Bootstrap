import React, { Component } from 'react';

class Collapse_items extends Component {
    render() {
        return (
            <div>
                <div className="row w-90 mx-auto card_container">
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="card card-body shadow-lg p-3 mb-5 bg-body rounded">
                               <h4>#1</h4>
                               <h5>2018.08. ~ 2019.01</h5>
                               <p>퍼블리셔 실무자 양성과정</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                            <div className="card card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h4>#2</h4>
                               <h5>2019.2. ~ 2019.07</h5>
                               <p>취업준비 및 아르바이트</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample3">
                            <div className="card card-body shadow-lg p-3 mb-5 bg-body rounded ">
                            <h4>#3</h4>
                               <h5>2019.07. ~ 2020.08</h5>
                               <p>광고매체사 사무원</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row w-90 mx-auto card_container pt-3">
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample4">
                            <div className="card card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h4>#4</h4>
                               <h5>2020.09. ~ 2021.03</h5>
                               <p>취업준비(퍼블리셔 이직준비)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample5">
                            <div className="card card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h4>#5</h4>
                               <h5>2021.04. ~ 2021.11</h5>
                               <p>신지모루 포장발송사원</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample6">
                            <div className="card card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h4>#6</h4>
                               <h5>2021.12 ~ 2022.06.23</h5>
                               <p>프론트엔드 학습 및 취업준비</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapse_items;