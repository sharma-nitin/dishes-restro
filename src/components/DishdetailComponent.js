import React, { Component } from 'react'
import {
    Card, CardImg, 
    CardText, CardBody, CardTitle
} from 'reactstrap';

class DishdetailComponent extends Component {

    renderComments(){
        if(this.props.dish && this.props.dish?.comments){
           var comment =this.props.dish.comments.map((comment)=>{
               return (
                <ul class = "list-unstyled">
                   <li>{comment.comment}</li>
                   <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </li>
                </ul>
               )
            })
            return comment;
        } else {
            return <div></div> 
        }
    }

    render() {
        const selectedDish = this.props.dish;
      
        if(selectedDish){
        var dish = 
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>

        }else{
             dish = <div></div>
        }
      return(
          <div className="container">
            <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dish}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.props.dish && this.props.dish.comments ? <h4>Comments</h4> :<div></div>}
                    { this.renderComments()}
                    </div>
            </div>
          </div>
      )
    }
}

export default DishdetailComponent;
