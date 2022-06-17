import { useParams, Link } from 'react-router-dom';

function CourseDetail() {
    const {course_id} = useParams();
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                <img src="/logo512.png" className="img-thumbnail" alt="Course title"/>
                </div>
                <div className='col-8'>
                    <h3>Course Title</h3>
                    <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. </p>
                    <p className='fw-bold'>Course By: <a href="#">Teacher 1</a></p>
                    <p className='fw-bold'>Duration: 3 Hours 30 Minutes</p>
                    <p className='fw-bold'>Total Enrolled: 456 Students</p>
                    <p className='fw-bold'>Rating: 4.5/5</p>
                </div>
            </div>0
            <div className='card mt-4'>
                <h5 className='card-header'>
                    Course Videos
                </h5>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Introduction 
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Setup Project <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Start with functional components <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Introduction <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Setup Project <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Start with functional components <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
            <div className="row">
                <div className="col-md-3">
                <div className="card">
                    <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#">Course title</a></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#">Course title</a></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#">Course title</a></h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail