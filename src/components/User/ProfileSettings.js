import Sidebar from './Sidebar';

function ProfileSettings() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Profile Settings</h5>
                        <div className='card-body'>
                            <div className='mb-3 row'>
                                <label for="fullName" className='col-sm-2 col-form-label'>Full Name</label>
                                <div className='col-sm-10'>
                                    <input type="text" className="form-control" id="fullName" />
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <label for="staticEmail" className='col-sm-2 col-form-label'>Email</label>
                                <div className='col-sm-10'>
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <label for="inputPassword" className='col-sm-2 col-form-label'>Password</label>
                                <div className='col-sm-10'>
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div> 
                            <hr />
                            <button className='btn btn-primary'>Update</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProfileSettings