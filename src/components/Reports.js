import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'
import { ProgressBar } from 'react-bootstrap'

class Reports extends Component {
    constructor(props) {
        super(props)
        this.events = props.events
        this.users = props.users
        this.state = {
            acceptedUsers: 0,
            waitingUsers: 0,
            blockedUsers: 0,
            activeEvents: 0,
            endedEvents: 0,
            feedbacks: 0,
            pendingFeedbacks: 0,
        }
    }
    componentDidMount() {
        this.setState({
            acceptedUsers: this.users.filter(user => user.state === 'accepted').length,
            waitingUsers: this.users.filter(user => user.state === 'waiting').length,
            blockedUsers: this.users.filter(user => user.state === 'blocked').length
        })
        this.setState({
            feedbacks: this.getFeedbacks(),
            pendingFeedbacks: this.getPendingFeedbacks()
        })
        this.setState({
            activeEvents: this.getActiveEvents(),
            endedEvents: this.getEndedEvents()
        })
    }
    getActiveEvents() {
        let sum = 0
        for (const event of this.events) {
            const ends = new Date(`${event.endDate}T${event.endTime}`)
            const now = new Date()
            if (now.getTime() < ends.getTime())
                sum++
        }
        console.log(sum)
        return sum
    }
    getEndedEvents() {
        let sum = 0
        for (const event of this.events) {
            const ends = new Date(`${event.endDate}T${event.endTime}`)
            const now = new Date()
            if (now.getTime() > ends.getTime())
                sum++
        }
        console.log(sum)
        return sum
    }
    caculateEvents() {
        const total = this.state.activeEvents + this.state.endedEvents
        return [
            this.state.activeEvents / total * 100,
            this.state.endedEvents / total * 100
        ]
    }
    getFeedbacks() {
        let sum = 0
        for (const event of this.events) {
            sum += event.feedbacks.length 
        }
        return sum
    }
    getPendingFeedbacks() {
        let sum = 0
        for (const event of this.events) {
            for (const feedback of event.feedbacks) {
                if (feedback.reply === '')
                    sum++
            } 
        }
        return sum
    }
    caculateFeedbacks() {
        return [
            (this.state.feedbacks - this.state.pendingFeedbacks) / this.state.feedbacks * 100,
            this.state.pendingFeedbacks / this.state.feedbacks * 100
        ]
    }
    caculateUsers() {
        const total = this.state.acceptedUsers +
            this.state.waitingUsers + 
            this.state.blockedUsers
        return [
            this.state.acceptedUsers / total * 100,
            this.state.waitingUsers / total * 100,
            this.state.blockedUsers / total * 100
        ]
    }
    render() {
        const [accepted, watiting, blocked] = this.caculateUsers()
        const [closed, pending] = this.caculateFeedbacks()
        const [active, ended] = this.caculateEvents()
        return (
            <div>
                <Container>
                    <Typography component="h1" variant="h4" style={{
                        marginBottom: '5%'
                    }}>
                        Reprots
                    </Typography>
                    <Typography component="h1" variant="h5" style={{
                        marginBottom: '16px'
                    }}>
                        Users
                    </Typography>
                    <ProgressBar style={{
                        marginBottom: '32px'
                    }}>
                        <ProgressBar variant="success" now={accepted} key={1} label={
                            `${accepted.toFixed(2)}% accepted`
                        } />
                        <ProgressBar variant="warning" now={watiting} key={2} label={
                            `${watiting.toFixed(2)}% waiting`
                        } />
                        <ProgressBar variant="danger" now={blocked} key={3} label={
                            `${blocked.toFixed(2)}% blocked`
                        } />
                    </ProgressBar>
                    <Typography component="h1" variant="h5" style={{
                        marginBottom: '16px'
                    }}>
                        Events
                    </Typography>
                    <ProgressBar style={{
                        marginBottom: '32px'
                    }}>
                        <ProgressBar variant="success" now={active} key={1} label={
                            `${active.toFixed(2)}% active`
                        } />
                        <ProgressBar variant="danger" now={ended} key={2} label={
                            `${ended.toFixed(2)}% ended`
                        } />
                    </ProgressBar>
                    
                    <Typography component="h1" variant="h5" style={{
                        marginBottom: '16px'
                    }}>
                        Feedbacks
                    </Typography>
                    <ProgressBar style={{
                        marginBottom: '32px'
                    }}>
                        <ProgressBar variant="success" now={closed} key={1} label={
                            `${closed.toFixed(2)}% closed feedback`
                        } />
                        <ProgressBar variant="danger" now={pending} key={2}
                         label={
                            `${pending.toFixed(2)}% pending feedback`
                        }/>
                    </ProgressBar>
                </Container>

            </div>
        )
    }
}

export default Reports