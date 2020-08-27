import React, { useState } from 'react';
import fakeData from '../../fakeData'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const enrollNow = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);

    }
    const totalPrice = cart.reduce((totalPrice, course) => totalPrice + course.price, 0)

    return (
        <div>

            {
                courses.map(course =>
                    <div className="courses">
                        <img src={course.img} alt="" />
                        <div className="course-description">
                            <h1>{course.name}</h1>
                            <h3>Price: ${course.price}</h3>
                            <h4>Students: {course.students}</h4>
                            <br />
                            <br />
                            <br />
                            <button className="btn btn-primary" onClick={() => enrollNow(course)}>Enroll Now</button>
                        </div>
                    </div>

                )
            }
            <div id="cart" className="shopping-cart shadow rounded bg-white">
                <h1>Shopping Cart</h1>
                <p>Course Ordered: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <button className="btn btn-warning"  onClick={() => alert("Thank You")}>CheckOut</button>
            </div>
            <br/><br/><br/>
        </div>

    );
};

export default Courses;