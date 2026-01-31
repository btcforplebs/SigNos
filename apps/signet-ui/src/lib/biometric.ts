import { NativeBiometric, BiometryType } from 'capacitor-native-biometric';

export interface BiometricAvailability {
    available: boolean;
    biometryType?: BiometryType;
    error?: string;
}

export async function checkBiometricAvailability(): Promise<BiometricAvailability> {
    try {
        const result = await NativeBiometric.isAvailable();
        return {
            available: true,
            biometryType: result.biometryType,
        };
    } catch (error: any) {
        return {
            available: false,
            error: error.message,
        };
    }
}

export async function authenticateWithBiometrics(reason: string = 'Authenticate to access your keys'): Promise<boolean> {
    try {
        await NativeBiometric.verifyIdentity({
            reason,
            title: 'Signet Authentication',
            subtitle: 'Use biometrics to unlock your keys',
            description: 'Signet needs to verify your identity to proceed.',
        });
        return true;
    } catch (error) {
        console.error('[Biometric] Authentication failed:', error);
        return false;
    }
}

export async function setBiometricCredentials(keyName: string, passphrase: string): Promise<void> {
    try {
        await NativeBiometric.setCredentials({
            server: 'signet',
            username: keyName,
            password: passphrase,
        });
    } catch (error) {
        console.error('[Biometric] Failed to set credentials:', error);
        throw error;
    }
}

export async function getBiometricCredentials(keyName: string): Promise<string | null> {
    try {
        const result = await NativeBiometric.getCredentials({
            server: 'signet',
        });

        // The plugin returns the last set/specified credentials for that server
        if (result.username === keyName) {
            return result.password;
        }
        return null;
    } catch (error) {
        console.error('[Biometric] Failed to get credentials:', error);
        return null;
    }
}

export async function deleteBiometricCredentials(): Promise<void> {
    try {
        await NativeBiometric.deleteCredentials({
            server: 'signet',
        });
    } catch (error) {
        console.warn('[Biometric] Failed to delete credentials (might not exist):', error);
    }
}
