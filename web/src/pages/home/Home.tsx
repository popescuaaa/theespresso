import React from "react";
import SideMenu from "../../components/nav/SideMenu";
import "./Home.css";
import TaskCard from "../../components/card/TaskCard";

const Home = () => {
    const user = "John Doe";

    return (
        <>
            <SideMenu />
            <div className="container">
                <div className="home-title">
                    Welcome back {user}.
                </div>
                <div className="home-body">
                    <p>Let's take a look at the latest updates</p>
                    <div className="home-feed">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                            <TaskCard
                                key={item}
                                title={`Task number @${item}`}
                                description={`This is a description for task number @${item}`}
                                status="in-progress"
                                dueDate="2020-01-01"
                                id={item}
                                priority="high"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;