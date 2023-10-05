type sizes=  'small' | 'medium' | 'large';


export interface AgeLimitBadgeProps {
    /**
     * the age limit
     */
    age: number;
    /**
     * size of the badge
     */
    size: sizes;
}