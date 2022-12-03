import React from "react";
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Text, Stack, Image, Button, ButtonGroup, Divider } from '@chakra-ui/react'

interface TaskCardProps {
    title: string;
    description: string;
    dueDate: string;
    priority: "high" | "medium" | "low";
    status: "todo" | "inProgress" | "done";
    id: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    dueDate,
    priority,
    status,
    id
}) => {
    return (
        <Card maxW='sm' key={id}>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='sm'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        The deadline for this task is: {dueDate} and its current status is {status == "todo" ? "To Do" : status == "inProgress" ? "In Progress" : "Done"}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                    <Text color={priority == "high" ? "red.400" : 'blue.600'} fontSize='2xl'>
                        {priority == "high" ? "High Priority" : priority == "medium" ? "Medium Priority" : "Low Priority"}
                    </Text>

                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Edit
                    </Button>
                    <Button variant='solid' colorScheme='orange'>
                        Delete
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}

export default TaskCard;