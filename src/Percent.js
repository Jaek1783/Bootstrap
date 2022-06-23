import React, { Component } from 'react';

class percent extends Component {
    render() {
        return (
            <div className='percent'>
                <div className="progress w-50 mx-auto my-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    <p className="text-center px-3">아침 8시 기상</p>
                </div>
                <div className="progress w-50 mx-auto my-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    <p className="text-center px-3">아침 운동 ( 헬스 )</p>
                </div>
                <div className="progress w-50 mx-auto my-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95% (프론트엔드 학습 오전 10시 ~ 오후 5시)</div>
                    <p className="text-center px-3"></p>
                </div>
                <div className="progress w-50 mx-auto my-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
                    <p className="text-center px-3">네이버 블로그 1일 1 포스팅</p>
                </div>
                <div className="progress w-50 mx-auto my-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
                    <p className="text-center px-3">깃허브 1일 1 업로드</p>
                </div>
            </div>
        );
    }
}

export default percent;