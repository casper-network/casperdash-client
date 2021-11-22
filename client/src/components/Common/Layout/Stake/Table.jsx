import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { toFormattedNumber, displayNaN } from '../../../../helpers/format';

const EmptyDelegation = () => (
	<div className="cd_empty_delegation_row row">
		<div className="cd_empty_delegation_section position-relative">
			<img src="assets/image/no-staking-icon.svg" alt="empty-cspr-stake" />
			<div className="cd_empty_delegation_message">
				You do not have any delegations yet. Stake CSPR, earn rewards and help Capser become more secure!
			</div>
		</div>
	</div>
);

const StakingAccountListComponent = ({ stakingDeployList = [] }) => {
	if (!stakingDeployList.length) {
		return <EmptyDelegation />;
	}
	const total = stakingDeployList
		.filter((stake) => !!stake.successAmount)
		.map((stake) => stake.successAmount)
		.reduce((prev, next) => prev + next, 0);

	return (
		<div className="overflow-auto">
			<Table className="cd_transaction_list_table cd_stake_table">
				<thead>
					<tr>
						<th className="cd_transaction_list_table_heading">No</th>
						<th className="cd_transaction_list_table_heading">Validator</th>
						<th className="cd_transaction_list_table_heading">Pending Amount</th>
						<th className="cd_transaction_list_table_heading">Staked Amount</th>
					</tr>
				</thead>
				<tbody>
					{stakingDeployList.map((staking, i) => (
						<tr key={staking.validator}>
							<td className="cd_transaction_list_no">{i + 1}</td>
							<td className="cd_transaction_list_validator">{staking.validator}</td>
							<td className="cd_transaction_list_amount">
								{displayNaN(toFormattedNumber(staking.pendingAmount))}
							</td>
							<td className="cd_transaction_list_amount">
								{displayNaN(toFormattedNumber(staking.successAmount))}
							</td>
						</tr>
					))}
					<tr>
						<td colSpan="1">
							<b>Total</b>
						</td>
						<td colSpan="2" />
						<td colSpan="1">
							<span>
								<b>{toFormattedNumber(total)}</b>
							</span>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default connect(null, null)(StakingAccountListComponent);
