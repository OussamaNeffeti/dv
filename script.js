import java.util.Scanner;

public class SuiteAnnuitees {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Annuités de remboursement ou d’amortissement (a): ");
        double a = scanner.nextDouble();

        System.out.print("Nombre de versements (n): ");
        double n = scanner.nextDouble();

        System.out.print("Taux d’intérêt de la période (i) (en pourcent): ");
        double i = scanner.nextDouble();

        i /= 100; // Convertir en décimal

        double valeurActuelle = a * (1 - Math.pow(1 + i, -n)) / i;
        double valeurAcquise = a * (Math.pow(1 + i, n) - 1) / i;

        System.out.println("Valeur actuelle: " + valeurActuelle);
        System.out.println("Valeur acquise: " + valeurAcquise);
    }
}
