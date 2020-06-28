import React, { Component } from 'react'
import {
    Card, CardImg, 
    CardText, CardBody, CardTitle
} from 'reactstrap';

class DishdetailComponent extends Component {

    renderComments(){
        if(this.props.selectedDish && this.props.selectedDish?.comments){
           var comment =this.props.selectedDish.comments.map((comment)=>{
               return (
                <ul class = "list-unstyled">
                   <li>{comment.comment}</li>
                   <li>--{comment.author}, {comment.date} </li>
                </ul>
               )
            })
            return   comment;
        } else {
            return <div></div> 
        }
    }

    render() {
        const selectedDish = this.props.selectedDish;
      
        if(selectedDish !== null){
        var dish = 
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>

        }else{
            var dish = <div></div>
        }
      return(
            <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dish}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.props.selectedDish && this.props.selectedDish.comments ? <h4>Comments</h4> :<div></div>}
                    { this.renderComments()}
                    </div>
            </div>
      )
    }
}

export default DishdetailComponent;
