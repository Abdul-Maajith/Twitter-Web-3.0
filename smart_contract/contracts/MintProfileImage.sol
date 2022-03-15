//SPDX-License-Identifier: Mit
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProfileImageNfts is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    
    // In order to increment the NFT token, Automatically
    Counters.Counter _tokenIds;
    mapping(uint => string) _tokenURIs;

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileImageNfts","PIN"){}
    
    // SettingUp the URI of the NFTtoken!
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    // Getting the NFTtoken URI by Id!
    // virtual overrides a internal function!
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),"URI not exist on that ID");
        string memory _RUri =  _tokenURIs[tokenId];
        return _RUri;
    }

    // Getting all the tokens that exists!
    function getAllToken() public view returns (RenderToken[] memory) {
        uint256 latestId = _tokenIds.current();

        // Returning renderToken(custom datatype) of all the NFTtoken currently in our blockchain Db!
        RenderToken[] memory res = new RenderToken[](latestId);

        // Looping thorough all the NFTs
        for(uint256 i = 0; i  <= latestId ; i++){
            if(_exists(i)) {
                // return URI, for every increment, 0, 1, 2...
                string memory uri = tokenURI(i);

                // Appending an object( of customDatatype - RenderToken) inside the tokenURI mapping for every looping. - Just like storing in array
                res[i] = RenderToken(i,uri," "); 
            }
        }

        return res;
    }

    function mint(address recipents, string memory _uri) public returns (uint256) {
        uint256 newId = _tokenIds.current();
        _mint(recipents,newId);
        _setTokenURI(newId,_uri);

        // Incrementing the tokenIds after minting new NFTtoken.
        _tokenIds.increment();
        return newId;
    }
}
