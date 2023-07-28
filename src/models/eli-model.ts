interface Incentives {
    id: string;
    name: string;
    benefit_type: string;
    max_amount: number;
    min_amount: number;
    amount_range_reason: string | null;
    upgrade_measures: string[];
    program: Program;
}
interface Program {
    id: string;
    name: string;
    cap_amount: number | null;
    description: string;
    url: string;
}

export default Incentives
