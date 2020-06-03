import React from 'react'
import './Card.css'

function Card({props:{image,name,cname,date,view}}) {
    return (
        <div>
        <div className="container">
            <div className="card">
                <div className="row cards">
                    <div className="col-md-2 photo text-center">
                       <img src={image}></img>
                    </div>
                    <div className="col-md-8 content">
                        <h5>{name}</h5>
                        <p className="intern"><i>#Internship</i></p>
                        <p className="company">{cname}</p>
                        <hr></hr>
                        <p className="company">{date}</p>
                        <p className="views"><i className="far fa-eye"></i> {view} Views</p>
                    </div>
                    <div className="col-md-2">
                    <hr className="hor"></hr>
                        <button className="btn btn-outline-primary waves-effect btn-sm ml-4" data-toggle="modal" data-target="#model1">Follow</button>
                        <br></br><br></br>
                        <button className="btn btn-sm btn-primary apply">Apply</button>
                    </div>
                </div>
                


                        <div className="modal fade" id="model1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Congratulation</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                Now You are Following Us
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                   
                                </div>
                                </div>
                            </div>
                        </div>






            </div>  
        </div>
        <br></br>
        </div>
    )
}

export default Card
