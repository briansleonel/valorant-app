interface WeaponStats {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: null;
    altFireType: string;
    altShotgunStats: null;
    airBurstStats: null;
    adsStats: AdsStats;
    damageRanges: Array<DamageRanges>;
    shopData : string
}

interface AdsStats {
    zoomMultiplier: number;
    fireRate: number;
    runSpeedMultiplier: number;
    burstCount: number;
    firstBulletAccuracy: number;
}

interface DamageRanges {
    rangeStartMeters: number;
    rangeEndMeters: number;
    headDamage: number;
    bodyDamage: number;
    legDamage: number;
}

interface ShopData {

}
