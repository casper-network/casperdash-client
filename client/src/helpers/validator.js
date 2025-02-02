/* eslint-disable complexity */
import { CLPublicKey } from 'casper-js-sdk';
import { MAX_METADATA_ATTRIBUTES } from '../constants/nft';

/**
 * Check value is public key.
 * @param {String}  - Public key.
 * @return {Boolean} - Is valid public key
 */
export const isValidPublicKey = (publicKey) => {
	try {
		const pbKey = CLPublicKey.fromHex(publicKey);
		return pbKey ? true : false;
	} catch (error) {
		return false;
	}
};

/**
 * validate NFT Mint Form
 * @param {object} values
 */
export const validateNFTMintForm = (values) => {
	let errors = {};
	if (!values.nftContract) {
		errors.nftContract = 'Required';
	}
	if (!values.name) {
		errors.name = 'Required';
	}
	if (!values.image) {
		errors.image = 'Required';
	}
	if (values.image && values.image.type && !values.image.type.includes('image')) {
		errors.image = 'Should be image.';
	}
	if (values.toAddress && !isValidPublicKey(values.toAddress)) {
		errors.toAddress = 'Invalid address.';
	}

	new Array(MAX_METADATA_ATTRIBUTES).fill().forEach((value, index) => {
		const attrName = `attribute${index}`;
		const attrValue = `value${index}`;
		if (values[attrName] && values[attrName].length > 20) {
			errors[attrName] = 'Max is 20 chars.';
		}
		if (values[attrValue] && values[attrValue].length > 20) {
			errors[attrValue] = 'Max is 20 chars.';
		}
	});

	return errors;
};

const COMMON_ERROR_MESSAGE = {
	MORE_THAN_ZERO: (tokenSymbol) => `Amount must be more than 0 ${tokenSymbol}.`,
	NOT_ENOUGH_BALANCE: 'Not enough balance.',
	NOT_ENOUGH_STAKED_AMOUNT: 'Not enough staked amount.',
};

/**
 * Validate transfer form.
 * @param {Object}  - Transfer object.
 * @return {Object} - Error object
 */
export const validateTransferForm = ({
	displayBalance,
	toAddress,
	sendAmount,
	tokenSymbol,
	minAmount,
	csprBalance,
	transferFee,
}) => {
	let errors = {};
	// to address
	if (!toAddress) {
		return { toAddress: 'Required.' };
	}
	if (!isValidPublicKey(toAddress)) {
		return { toAddress: 'Invalid address.' };
	}
	// send amount
	if (sendAmount < minAmount) {
		return { sendAmount: `Amount must be at least ${minAmount} ${tokenSymbol}.` };
	}
	if (sendAmount <= 0) {
		return { sendAmount: `Amount must be more than 0 ${tokenSymbol}.` };
	}
	if (sendAmount > displayBalance) {
		return { sendAmount: 'Not enough balance.' };
	}
	if (tokenSymbol === 'CSPR' && sendAmount + transferFee > displayBalance) {
		return { sendAmount: 'Not enough balance.' };
	}
	//cspr balance
	if (csprBalance < transferFee) {
		return { transferFee: 'Not enough CSPR balance.' };
	}
	return errors;
};

export const validateStakeForm = ({ amount, tokenSymbol, balance, fee, minAmount }) => {
	let errors = {};
	if (amount <= 0) {
		errors.amount = COMMON_ERROR_MESSAGE.MORE_THAN_ZERO(tokenSymbol);
	} else if (amount + fee > balance) {
		errors.amount = COMMON_ERROR_MESSAGE.NOT_ENOUGH_BALANCE;
	}

	if (balance <= minAmount) {
		errors.amount = `Insufficient balance. System requires ${minAmount} ${tokenSymbol} minimum balance.`;
	}

	return errors;
};

export const validateUndelegateForm = ({ amount, tokenSymbol, balance, fee, stakedAmount, minAmount }) => {
	let errors = {};
	if (amount <= 0) {
		errors.amount = COMMON_ERROR_MESSAGE.MORE_THAN_ZERO(tokenSymbol);
	} else if (amount > stakedAmount) {
		errors.amount = COMMON_ERROR_MESSAGE.NOT_ENOUGH_STAKED_AMOUNT;
	} else if (fee > balance) {
		errors.amount = COMMON_ERROR_MESSAGE.NOT_ENOUGH_BALANCE;
	}

	if (balance <= minAmount) {
		errors.amount = `Insufficient balance. System requires ${minAmount} ${tokenSymbol} minimum balance.`;
	}

	return errors;
};
