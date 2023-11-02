import React from 'react';

const UserCard = ({user}) => {
  return (
    <div>
        <h4>Name: {user.name}</h4>
        <h4>Username: {user.username}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Address: {
                // Street: {user.address.street},
                // Suite: {user.address.suite},
                // City: {user.address.city},
                // Zipcode: {user.address.zipcode},
                // Geo: ({user.address.geo.lat}, {user.address.geo.lng}),
        }
        </h4>
        <h4>Phone: {user.phone}</h4>
        <h4>Website: {user.website}</h4>
        <h4>Company: {
                // Name: {user.company.name},
                // CatchPhrase: {user.company.catchPhrase},
                // Bs: {user.company.bs},
        }
        
        </h4>
    </div>
  )
}

export default UserCard