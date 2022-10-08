import React, { Component } from "react";

class Movies extends Component {
	state = {};
	render() {
		console.log("this.props");
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
					</tr>
				</thead>
				<tbody>
						{this.state.movies.map((movie) => (
							<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>
								<button className="btn btn-danger btn-sm">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

export default Movies;
