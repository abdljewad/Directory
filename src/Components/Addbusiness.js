import React, { Component } from 'react';

 class Addbusiness extends Component {
  constructor (props){
    super(props);
    this.nameInput=React.createRef();
    this.emailInput=React.createRef();
    this.phoneInput=React.createRef();
    this.catagoryInput=React.createRef();
  }
  state= {
    name:'',
    phone:'',
    email:'',
    catagory:''

  }

  onSubmit = e => {
    e.preventDefault();
    const business={
      name:this.nameInput.current.value,
      email:this.emailInput.current.value,
      phone:this.phoneInput.current.value,
      catagory:this.catagoryInput.current.value,
    }
    
  };
  static defaultProps={
    name: 'a',
    email: 'b',
    phone: 'c',
    catagory: ''
  };
  onChange=e =>this.setState({[e.target.name]:e.target.value});
  render() {
    const{name,email,phone,catagory}=this.state;
    return (
      <React.Fragment>
        <div className=" card mb-3 col-6">
            <div className="card-header c"> Add Business</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" 
                            defaultValue={name}
                            ref={this.nameInput}
                            onChange={this.onChange}
                            className="form-control form-control-lg" 
                            placeholder="Enter business Name"/>

                            <label htmlFor="name">Catagory</label>
                            <input type="text" name="catagory" 
                            defaultValue={catagory}
                            ref={this.catagoryInput}
                            onChange={this.onChange}
                            className="form-control form-control-lg" 
                            placeholder="Enter business Catagory"/>
 
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" 
                            defaultValue={phone}
                            ref={this.phoneInput}
                            onChange={this.onChange}
                            className="form-control form-control-lg" 
                            placeholder="Enter business Phone"
                                      />
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" 
                            defaultValue={email}
                            ref={this.emailInput}
                            onChange={this.onChange}
                            className="form-control form-control-lg" 
                            placeholder="Enter business email"
                                      />

                        </div>
                        <input
                        type="submit"
                        value="Add Business"
                        className="btn btn-success btn-block"/>


                    </form>
                    
            </div>
            
            
        </div>
        
      </React.Fragment>
    )
  }
}export default Addbusiness;
