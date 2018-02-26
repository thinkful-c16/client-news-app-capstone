import React from 'react';
import * as actions from '../../actions/activity';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';

//dummy data for "usersFollowing"
let dummydata=[
	{
		firstName: 'Jim',
		lastName: 'Greene',
		articlesShared: [
			{
				articleTitle: 'Millennials Are Saving for the Future, if They Can Afford To',
				url: 'http://example.com',
			  timestamp: '2018-02-26T13:53:01'
			},
			{
				articleTitle: 'CNNs Jeff Zucker calls Google and Facebook monopolies',
				url: 'http://example.com',
			  timestamp: '2018-02-25T11:15:01'
			},
		],
		collections: [{
			collectionTitle: 'Fergie News',
			timestamp: '2018-02-20T14:32:44',
			collectionArticles: [
				{
					title:'Fergie\`\s Wild Reinvention of the National Anthem at the NBA All-Star',
					url: 'https://www.newyorker.com/culture/culture-desk/fergies-wild-reinvention-of-the-national-anthem-at-the-nba-all-star-game',
					timestamp: '2018-02-20T14:32:45'
				},
				{
					title:'In Defense of Soundtracks. And Fergie.',
					url: 'https://www.nytimes.com/2018/02/24/arts/music/popcast-soundtracks-black-panther-greatest-showman-fergie.html',
					timestamp: '2018-02-21T10:23:45'
				},
				{
					title:'Wendy Williams Says Fergie ‘Needs Auto-Tune’ After National Anthem Performance',
					url: 'https://www.usmagazine.com/entertainment/news/wendy-williams-fergie-needs-auto-tune/',
					timestamp: '2018-02-22T16:10:05'
				},
			]
		}]
	},
	{
		firstName: 'Mary',
		lastName: 'Smith',
		articlesShared: [
			{
				articleTitle: 'Apple confirms it now uses Google Cloud for iCloud services',
				url: 'http://example.com',
				timestamp: '2018-02-24T12:07:01'
			},
			{
				articleTitle: 'Trump says he would have run into Florida school without a weapon',
				url: 'http://example.com',
				timestamp: '2018-02-22T09:55:31'
			},
		],
		collections: [{
			collectionTitle: 'Olympics 2018!',
			timestamp: '2018-02-21T16:32:44',
			collectionArticles: [
				{
					title:'The 1960 Winter Olympics: Where Underdogs Ruled',
					url: 'http://www.history.com/news/1960-squaw-valley-winter-olympics-underdogs-firsts',
					timestamp: '2018-02-25T17:05:45'
				},
				{
					title:'Russian Fans at the Olympics Are Loud, Proud and Angry',
					url: 'https://www.nytimes.com/2018/02/20/sports/olympics/russian-fans.html',
					timestamp: '2018-02-24T19:21:45'
				},
				{
					title:'BJOERGEN BECOMES MOST MEDALLED WINTER OLYMPIAN OF ALL TIME',
					url: 'https://www.olympic.org/news/bjoergen-becomes-most-medalled-winter-olympian-of-all-time',
					timestamp: '2018-02-21T08:10:05'
				},
			]
		}]
	},
]

export class ActivityFeed extends React.Component {

	componentWillMount(){
		console.log('activity feed!')
		//this.props.dispatch(actions.fetchActivity)
	}

	render() {
		let sharedArticlesActivity = dummydata.map(friend => {friend.firstName, friend.lastName})
		console.log(sharedArticlesActivity)

		return(
			<div>
				stuff goes here
			</div>
		)
	}
}

export default requiresLogin()(connect()(ActivityFeed));