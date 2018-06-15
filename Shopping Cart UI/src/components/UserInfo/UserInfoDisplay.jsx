import React from 'react'
export const UserInfoDisplay = ({user,fetched})=>(
    <div>
        <section className="current-user">
            {fetched ?
            <p>
                {user.name}
                <br/>
                {user.address1}, {user.country}
                <br/>
                {user.phone}
            </p>
            : <div>
                <p>
                    Please wait while we fetch your user info.
                </p>
            </div>}
        </section>
    </div>
);