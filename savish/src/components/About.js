import React, { Component } from 'react'
import princy from '../photos/pricy.jpg';
import habbu from '../photos/habbu.jfif';
import orgy from '../photos/IMG_7245.JPG';
class About extends Component {
    constructor() {
        super()

        this.onClickLeft = this.onClickLeft.bind(this)
        this.onClickRight = this.onClickRight.bind(this)

        const img0 = require('../photos/sa1.JPG');
        const img1 = require('../photos/sa2.JPG');
        const img2 = require('../photos/sa4.JPG');
        const img3 = require('../photos/sa5.JPG');
        const img4 = require('../photos/sa6.JPG');
        const img5 = require('../photos/sa7.JPG');
        const img6 = require('../photos/sa8.JPG');
        const img7 = require('../photos/sa3.JPG');
        const img8 = require('../photos/saboii.JPG');
        this.state = {
            index: 0,
            imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8],
            name: ['Savishkar', 'Rohit Narulkar', 'Suniti Gaonkar', 'Aishwarya Parab', 'Shivam Raikar', 'Aarushi Raghav', 'Vritika Naik', 'Erisha Ferrao', 'Deepraj Bhosle'],
            designation: ['Council', 'President', 'Chairperson', 'Literature section', 'Art Section', 'PR & Managment', 'Technical Adviser', 'Secretary', 'Assistance Technical Advisar']
        }
    }
    onClickLeft() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
            })
        }
        else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    onClickRight() {
        if (this.state.index === this.state.imgList.length - 1) {
            this.setState({
                index: 0
            })
        }
        else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h2 className="text-center">about us</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={princy} alt='principal' className="img-fluid"></img>
                        </div>

                        <div className='col-sm-8'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae suscipit orci. Nullam gravida sollicitudin libero. Aliquam in enim facilisis, consectetur mi quis, semper risus.</p></div>
                    </div>
                    <br /><br /><br />
                    <div className="row">
                        <div className="col-sm-8 col-md-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae suscipit orci. Nullam gravida sollicitudin libero. Aliquam in enim facilisis, consectetur mi quis, semper risus.
                    </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="text-center">
                                <img src={habbu} alt="habbu sir" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <br /><br />
                    <div className='text-center'>
                        <img src={orgy} className="rounded img-fluid" alt="sorry couldnt load" />
                    </div>

                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae suscipit orci. Nullam gravida sollicitudin libero. Aliquam in enim facilisis, consectetur mi quis, semper risus. Fusce bibendum neque a ipsum consequat, et ultrices lorem vestibulum. Quisque molestie ex massa, sed laoreet elit fringilla et. Quisque viverra convallis blandit. Phasellus lobortis, sem id convallis varius, erat magna consequat nulla, non suscipit massa est at turpis. Maecenas justo ante, volutpat vitae quam vel, ultrices commodo elit. Pellentesque consectetur libero ac massa eleifend, vel vehicula arcu mattis. In a quam nibh. Cras iaculis vestibulum ex, vitae tincidunt augue aliquet a.</p>
                    <div className='text-nowrap text-center'>
                        <div className='row'>
                            <div className="col">
                                <button className='butts' onClick={this.onClickLeft}><i className="left-arrow"></i></button>

                                <img src={this.state.imgList[this.state.index]} alt='sorry couldnt load' className="council-img img-fluid" />
                                <button className="butts" onClick={this.onClickRight}><i className="right-arrow"></i></button>
                            </div>
                        </div>
                        <br />
                        <div className='d-flex justify-content-center'>
                            <p className="name">name:{this.state.name[this.state.index]}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="desig">designation:{this.state.designation[this.state.index]}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
