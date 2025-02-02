import { CLPublicKey } from 'casper-js-sdk';
import { toMotes } from '../helpers/currency';
import { getTransferDeploy, signDeploy } from './casperServices';

export const getSignedTransferDeploy = async (transactionDetail = {}, casperApp) => {
	try {
		const { fromAddress, toAddress, amount, transferId = 0, fee } = transactionDetail;
		const fromPbKey = CLPublicKey.fromHex(fromAddress);
		const toPbKey = CLPublicKey.fromHex(toAddress);
		const transferDeploy = getTransferDeploy(fromPbKey, toPbKey, toMotes(amount), transferId, fee);
		const signedDeploy = await signDeploy(transferDeploy, fromAddress, toAddress, casperApp);

		return signedDeploy;
	} catch (error) {
		return { error: { message: error.message } };
	}
};
