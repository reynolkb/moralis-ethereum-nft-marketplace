import { Select } from 'antd';
import { useMoralisDapp } from 'providers/MoralisDappProvider/MoralisDappProvider';
import { getCollectionsByChain } from 'helpers/collections';
import React, { useState, useEffect } from 'react';

function SearchCollections({ setInputValue }) {
	const { Option } = Select;
	const { chainId } = useMoralisDapp();
	const NFTCollections = getCollectionsByChain(chainId);

	useEffect(() => {
		// async function fetchData() {
		// 	console.log(` ------------------- fetchMarketItems is ${JSON.stringify(fetchMarketItems)}`);
		// 	console.log(` ----------------------- nft to buy is ${nftToBuy}`);
		// }
		// fetchData();
		console.log(` ------------ NFTCollections ${NFTCollections}`);
	}, []);

	function onChange(value) {
		setInputValue(value);
	}

	return (
		<>
			<Select showSearch style={{ width: '1000px', marginLeft: '20px' }} placeholder='Find a Collection' optionFilterProp='children' onChange={onChange}>
				{NFTCollections &&
					NFTCollections.map((collection, i) => (
						<Option value={collection.addrs} key={i}>
							{collection.name}
						</Option>
					))}
			</Select>
		</>
	);
}
export default SearchCollections;
