/// <reference types="node" />
import Transport from "@ledgerhq/hw-transport";
import { Transaction } from "./transaction";
declare class Karlsen {
    /**
     * @type {Transport}
     */
    transport: Transport;
    constructor(transport: Transport);
    /**
     * Get Karlsen address (public key) for a BIP32 path.
     *
     * @param {string} path a BIP32 path
     * @param {boolean} display flag to show display
     * @returns {Buffer} an object with the address field
     *
     * @example
     * karlsen.getPublicKey("44'/121337'/0'").then(r => r.address)
     */
    getPublicKey(path: any, display?: boolean): Promise<Buffer>;
    /**
     * Sign a Karlsen transaction. Applies the signatures into the input objects
     *
     * @param {Transaction} transaction - the Transaction object
     *
     *
     * @example
     * karlsen.signTransaction(transaction)
     */
    signTransaction(transaction: Transaction): Promise<void>;
    /**
     * Sign personal message on the device
     * @param {String} message - the personal message string to sign. Max 120 len for Nano S, 200 len for others
     * @param {0|1} addressType
     * @param {number} addressIndex
     *
     * @returns {Buffer} application config object
     *
     * @example
     * karlsen.signMessage(message).then(r => r.version)
     */
    signMessage(message: string, addressType?: 0 | 1, addressIndex?: number, account?: number): Promise<{
        signature: string;
        messageHash: string;
    }>;
    /**
     * Get application configuration.
     *
     * @returns {Buffer} application config object
     *
     * @example
     * karlsen.getVersion().then(r => r.version)
     */
    getVersion(): Promise<{
        version: string;
    }>;
    sendToDevice(instruction: any, p1: any, payload?: Buffer, p2?: number): Promise<Buffer>;
}
export default Karlsen;
//# sourceMappingURL=karlsen.d.ts.map