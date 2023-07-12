/*
Task Model
*/

module.exports = mongoose => {
    const Task = mongoose.model(
        "tasks",
        mongoose.Schema(
            {
                title: String,
                description: String,
                status: Number
            },
            { timestamps: true }
        )
    );
    return Task;
};

